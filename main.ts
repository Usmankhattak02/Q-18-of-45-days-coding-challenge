let places: string[]=[`Islamabad`,`Hyderabad`,`Faisalabad`,`Abbottabad`];
console.log(`original :` + places);
console.log("copy "+ [...places].sort());
console.log("copy "+ [...places].reverse());
console.log("copy "+ places.sort().reverse());
console.log("original "+ places);
 places.sort();
 console.log(places);
 places.reverse();
console.log(places)