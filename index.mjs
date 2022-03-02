import { full, safe } from './dimensions.mjs';

window .onload = async () => {

const canvas = document .body .appendChild (

document .createElement ( 'canvas' )

);

canvas .width = full .width;
canvas .height = full .height;

if ( ! canvas .getContext )
return;

const engine = canvas .getContext ( '2d' );

engine .fillStyle = 'black';
engine .fillRect ( 0, 0, full .width, full .height );

const qrcode = new Image ();

qrcode .src = 'qrcode.svg';
qrcode .width = 558;
qrcode .height = 558;
qrcode .onload = () => {

engine .drawImage (

qrcode,
75,
150

);

const signature = new Image ();

signature .src = 'signature.svg';
signature .width = 558;
signature .height = 90;
signature .onload = () => {

engine .drawImage (

signature,
75,
855.0967741935484

);

canvas .toBlob ( blob => {

const url = document .body .appendChild (

document .createElement ( 'a' )

);

url .innerHTML = `

<h1>Download</h1>

`;

url .download = `businesscard-${ Date .now () }.png`;
url .href = URL .createObjectURL ( blob )

} );

};

};

};
