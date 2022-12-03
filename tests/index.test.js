var server = require('../index.js');
var http = require('http');
var assert = require('assert');

it('should return 200', function (done) {
    http.get('http://localhost:8000', function (res) {
        assert.equal(res.statusCode, '200');
        done();
    });
});

it('should say Hello World', function (done) {
    http.get('http://localhost:8000', function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            assert.equal(data, 'Hello World 2, please <a href="/welcome">welcome</a>.');
            done();
        });
    });
});

it('should say Welcome', function (done) {
    http.get('http://localhost:8000/welcome', function (res) {
        var data = '';
        res.on('data', function (chunk) {
            data += chunk;
        });
        res.on('end', function () {
            assert.equal(data, "Welcome");
            done();
        });
    });
});
