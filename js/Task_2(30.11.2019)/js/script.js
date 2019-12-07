const rand = ( ) => Math.floor( Math.random() * 16 );
const print = function ( length ) {
  return function ( value ) {
    let v = value.toString( 2 );
    v = '0'.repeat( length-v.length ) + v;
    console.log(` ${ v } : ${ value } `);
    return value;
  };
};
const print6 = print( 4 );
const a = [ ...Array(5) ].map( rand );
const mask = '1d 0u 3d 2u'
  .split(' ')
  .map( function( m, index, A ) {
    const re = /^(\d+)([ud])$/i;
    const match = m.match( re );
    return match ? { index: +match[1], direction: match[2], offset: A.length-index-1, } : false;
  } )
  .filter( _ => _ )
  .sort( ( a, b ) => a.index-b.index );
const b = a.slice().sort( function( l, r ) {
  for ( let m of mask ) {
    const ll = l >> m.offset & 1;
    const rr = r >> m.offset & 1;
    if ( ll < rr ) {
      return m.direction==='d' ? 0 : -1;
    } else if ( ll > rr ) {
      return m.direction==='u' ? 0 : -1;
    }
  }
} );
console.log('1d 0u 3d 2u');
console.log("a:");
console.log(a);
a.forEach( print6 );
console.log("b:");
console.log(b);
b.forEach( print6 );