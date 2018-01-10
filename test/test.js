'use strict';

const list = require('../list.js');

const expect = require('expect');


//push #1
describe( 'push', function(){
  describe('push correct', function() {
    it('it should returns 1, 2, 3, 4, 5, 6', function(){
      let result = list.prototype.push(6);
      expect(result).toBe([1,2,3,4,5,6]);
    });
  });
});

//push #2
describe( 'push', function(){
  describe('push in-correct', function() {
    it('it should returns 1, 2, 3, 4, 5, 7', function(){
      let result = list.prototype.push(7);
      expect(result).toBe([1,2,3,4,5,6,7]);
    });
  });
});

//push #3
describe( 'push', function(){
  describe('push in-correct #2', function() {
    it('it should returns 1, 2, 3, 4, 5', function(){
      let result = list.prototype.push();
      expect(result).toBe([1,2,3,4,5]);
    });
  });
});

//pop #1
describe( 'pop', function(){
  describe('pop correct', function() {
    it('it should returns 1, 2, 3, 4', function(){
      let result = list.prototype.pop();
      expect(result).toBe([1,2,3,4]);
    });
  });
});
//pop #2
describe( 'pop', function(){
  describe('pop in-correct', function() {
    it('it should returns undefined', function(){
      let result = list.prototype.pop(5);
      expect(result).toBe(undefined);
    });
  });
});
//pop #3
describe( 'pop', function(){
  describe('pop in-correct #2', function() {
    it('it should returns undefined', function(){
      let result = list.prototype.pop(6);
      expect(result).toBe(undefined);
    });
  });
});
//forEach #1
describe( 'forEach', function(){
  describe('forEach correct', function() {
    it('it should returns 1 2 3 4 5', function(){
      let result = list.forEach(function(element) {
          return element;
      });;
      expect(result).toBe(1 2 3 4 5);
    });
  });
});
//forEach #2
describe( 'forEach', function(){
  describe('forEach in-correct', function() {
    it('it should returns undefined', function(){
      let result = list.forEach(function(element) {
      });;
      expect(result).toBe(undefined);
    });
  });
});
//forEach #3
describe( 'forEach', function(){
  describe('forEach in-correct #2', function() {
    it('it should returns undefined', function(){
      let result = list.forEach(function(element) {
        return yarn;
      });;
      expect(result).toBe(undefined);
    });
  });
});
//filter #1
describe( 'filter', function(){
  describe('forEach correct', function() {
    it('it should returns 1, 2, 3', function(){
      let result = list.filter(function(element){
        return list.length > 3;
      });;
      expect(result).toBe(1, 2, 3);
    });
  });
});
//filter #2
describe( 'filter', function(){
  describe('forEach in-correct', function() {
    it('it should returns undefined', function(){
      let result = list.filter(function(element){
      });;
      expect(result).toBe(undefined);
    });
  });
});
//filter #3
describe( 'filter', function(){
  describe('forEach in-correct #2', function() {
    it('it should returns undefined', function(){
      let result = list.filter(function(element){
        return list.length > 0;
      });;
      expect(result).toBe(undefined);
    });
  });
});
//map #1
describe( 'map', function(){
  describe('map correct', function() {
    it('it should return 5, 10, 15, 20, 25', function(){
      let result = list.map(function(element) {
         return element * 5;
      expect(result).toBe([5, 10, 15, 20, 25]);
    });
  });
});
//map #2
describe( 'map', function(){
  describe('map in-correct', function() {
    it('it should return undefined', function(){
      let result = list.map(function(element) {
      expect(result).toBe(undefined);
    });
  });
});
//map #3
describe( 'map', function(){
  describe('map in-correct #2', function() {
    it('it should return undefined', function(){
      let result = list.map(function() {
        return element * 5;
      expect(result).toBe(undefined);
    });
  });
});
//reduce #1
describe( 'reduce', function(){
  describe('reduce correct', function() {
    it('it should return 10', function(){
      let result = list.prototype.reduce(function(acc, value) {
          return acc + value;;
      expect(result).toBe([10]);
    });
  });
});
//reduce #2
describe( 'reduce', function(){
  describe('reduce in-correct', function() {
    it('it should return undefined', function(){
      let result = list.prototype.reduce(function(value) {
          return acc + value;;
      expect(result).toBe([undefined]);
    });
  });
});
//reduce #3
describe( 'reduce', function(){
  describe('reduce in-correct #2', function() {
    it('it should return ', function(){
      let result = list.prototype.reduce(function(acc) {
          return acc + value;;
      expect(result).toBe(undefined);
    });
  });
});
