let count_elements = prompt("Input count elements: ");
function Fibo() {
    const f = (function * () {
      const A = [ 0, 1 ];
      let forward = true;
      for ( ; true; ) {
        const flag = yield A[0];
        if ( flag===true || flag===false ){
          forward = flag;
        }
        if ( forward ) {
          const next = A[0] + A[1];
          A.push( next );
          A.shift();
        } else {
          const prev = A[1] - A[0];
          A.unshift( prev );
          A.pop();
        }
      }
    })();
    const one = ( flag ) => f.next( flag ).value;
    return ( amount, flag ) => {
       return one( flag );
    
    }
  }
  
  const f1 = Fibo();
  let direction;
  for ( let i=0, f=true; i<count_elements; i++ ) {
        console.log(f1( i, f) );
        if(i == count_elements-1 )
        { 
            cont = confirm("Do you want to continue: ");
            if(cont == true) 
            {
                count_elements = prompt("Input count elements: ");
                direction = prompt("Input direction(forward/back): ");
                if(direction =="forward") f = true;
                if(direction =="back") f = false;
                i = 0;     
            }
            else{
                break;
            }
        }
    }
  