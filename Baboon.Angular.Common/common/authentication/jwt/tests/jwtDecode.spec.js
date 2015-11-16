  //Using from open source angular-jwt library (https://github.com/auth0/angular-jwt). Consider just including the library itself. Uses MIT License
(function () {

  'use strict';

  describe('jwtDecode', function() {

    beforeEach(function() {
      angular.mock.module('angular-baboon');
    });

    describe('no expiration tokens', function() {
      var infiniteToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZSIsImFkbWluIjp0cnVlfQ.eoaDVGTClRdfxUZXiPs3f8FmJDkDE_VCQFXqKxpLsts';
      it('should correctly decode it', inject(function (jwtTokenDecoder) {
        var token = jwtTokenDecoder.decodeToken(infiniteToken);
        expect(token.name).toBe('John Doe');
      }));

      var multipleUrlCharactersToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyMzQ1Njc4OTAsIm5hbWUiOiJKb2huIERvZWxsbO-jv2xsbO-jvyIsImFkbWluIjp0cnVlfQ.NCPM3vNwuvJGMIjR0csEFQDrSLcjm5P7ORumVq4ezmo';
      it('should correctly decode tokens with multiple URL-safe characters', inject(function (jwtTokenDecoder) {
        var token = jwtTokenDecoder.decodeToken(multipleUrlCharactersToken);

        expect(token.name).toBe('John Doellllll');
      }));
    });

    describe('tokens with expiration', function() {
      var expToken = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3NhbXBsZXMuYXV0aDAuY29tLyIsInN1YiI6ImZhY2Vib29rfDEwMTU0Mjg3MDI3NTEwMzAyIiwiYXVkIjoiQlVJSlNXOXg2MHNJSEJ3OEtkOUVtQ2JqOGVESUZ4REMiLCJleHAiOjE0MTIyMzQ3MzAsImlhdCI6MTQxMjE5ODczMH0.7M5sAV50fF1-_h9qVbdSgqAnXVF7mz3I6RjS6JiH0H8';
      it('should correctly decode it', inject(function (jwtTokenDecoder) {
        var token = jwtTokenDecoder.decodeToken(expToken);

        expect(token.sub).toBe('facebook|10154287027510302');
      }));
    });
  });

})();
