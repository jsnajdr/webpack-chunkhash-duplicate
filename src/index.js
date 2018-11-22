import './index.css';

console.log( 'Hello from index' );
import( './chunk' ).then( chunk => {
  console.log( chunk );
} );
