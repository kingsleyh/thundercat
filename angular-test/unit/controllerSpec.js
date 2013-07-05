describe('AppList controllers', function () {

    describe('AppListCtrl', function () {

        it('should create "apps" model with 2 apps', function () {
            var scope = {},
                ctrl = new AppListCtrl(scope);

            expect(scope.apps.length).toBe(2);
        });
    });
});