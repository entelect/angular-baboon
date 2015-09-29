(function () {
    'use strict';
    describe('Common Utilities', function () {
        describe('Array Utilities', function () {
            var arrayUtility;

            beforeEach(module('common.utilities'));

            beforeEach(inject(function (arrayUtilities) {
                arrayUtility = arrayUtilities;
            }));

            describe('Clear', function () {
                it('should clear the array', function () {
                    var array = [1, 2, 3, 4, 5];
                    arrayUtility.clear(array);
                    expect(array.length).toEqual(0);
                    expect(array[0]).toEqual(undefined);
                    expect(array[4]).toEqual(undefined);
                });
            });
            
            describe('CopyInto', function () {
                it('should copy an array into another', function () {
                    var array1 = [1, 2, 3, 4, 5];
                    var array2 = [];
                    arrayUtility.copyInto(array1,array2);
                    expect(array1.length).toEqual(5);
                    expect(array2.length).toEqual(5);
                    expect(array2[0]).toEqual(1);
                    expect(array2[4]).toEqual(5);
                });
            });

        });
    });
})();