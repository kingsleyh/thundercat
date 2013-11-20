#!/usr/bin/env ruby
require 'fssm'
require 'dante'
require 'yaml'
require 'rappa'

class Decision

  def standalone_decide(option, base, relative, type)
    zip_file = base + '/' + relative
    zip_dir = path_without_ext(zip_file, base)
    if option == :create
      clean_standalone(zip_dir, zip_file, base) if zip_already_deployed?(zip_dir)
      deploy_standalone(zip_file, zip_dir, base)
    end
  end

  def standalone_initial(standalone_dir)
    Dir.entries(standalone_dir).each do |entry|
      if entry.match(/.zip$/)
        decide(:create, standalone_dir, entry, 'file')
      end
    end
  end

  private

  def deploy_standalone(zip_file, zip_dir, base)
    Rappa.new(:input_archive => zip_file, :output_archive => base).standalone_expand
    puts "[ThunderCat] Successfully deployed standalone zip archive at: #{zip_file}"
    archive_zip(zip_file, base)
  end

  def archive_existing_standalone(zip_dir, zip_file, base)
    FileUtils.mv(zip_dir, "#{base}/../standalone_archive/#{file_without_ext(zip_file)}.#{Time.now.to_i}")
  end

  def archive_zip(zip_file, base)
    FileUtils.mv(zip_file, "#{base}/../standalone_archive/#{file_without_ext(zip_file)}.#{Time.now.to_i}.zip")
    puts "[ThunderCat] archived standalone zip file: #{zip_file}"
  end

  def zip_already_deployed?(rap_dir)
    File.exists?(rap_dir)
  end

  def clean_standalone(zip_dir, zip_file, base)
    archive_existing_standalone(zip_dir, zip_file, base)
  end

  def path_without_ext(file, base)
    base_name = File.basename(file)
    base + '/' + base_name.chomp(File.extname(base_name))
  end

  def file_without_ext(file)
    base_name = File.basename(file)
    base_name.chomp(File.extname(base_name))
  end

end


class Standalone

  def self.go
    begin
      standalone_dir = File.dirname(__FILE__) + '/standalone'
      Decision.new.standalone_initial(standalone_dir)
      FSSM.monitor(standalone_dir, '**/*.zip', :directories => true) do
        update { |base, relative, type| puts "updated #{base}, #{relative}, #{type}" }
        delete { |base, relative, type| puts "delete #{base}, #{relative}, #{type}" }
        create { |base, relative, type| Decision.new.standalone_decide(:create, base, relative, type) }
      end

    rescue => e
      puts "[ThunderCat] Standalone encountered an error: #{e}"
    end
  end

end

Dante.run('standalone') do |opts|
  Standalone.go
end



