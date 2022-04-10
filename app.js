// Left = desaturated

const greenbox = document.querySelector('.greenbox');
const redbox = document.querySelector('.redbox');
const bluebox = document.querySelector('.bluebox');

// when flag = 1, recolor functions run normally.
// when flag = -1, recolor functions are skipped.
let gflag = 1;
let bflag = 1;
let rflag = 1;


const green_recolor = function(e){
    if(gflag===1){
        let elw = greenbox.clientWidth;
        let elh = greenbox.clientHeight;

        let xi = 0;
        let yupsilon = 0;

        if(e.type==="touchmove"){
            var rect = e.target.getBoundingClientRect();
            xi = e.targetTouches[0].pageX - rect.left;
            yupsilon = e.targetTouches[0].pageY - rect.top;

        } else {
            xi = e.offsetX;
            yupsilon = e.offsetY;

        };

        let perx = (xi/elw)*100;
        let pery = (yupsilon/elh)*100;
   
        
        let leftness = 100-perx;
        let height = 100-pery;

        let bt = 5*(height-50);
        
        let dk = 255 - (5.1*(pery-50));
        
        greenbox.style.filter = `grayscale(${leftness}%)`;
        if((100-pery)>=50){

            greenbox.style.backgroundColor = `rgba(${bt},255,${bt},1)`;
        } else {
            greenbox.style.backgroundColor=`rgba(0,${dk},0,1)`;

    }}
    else{null};
    
};

const red_recolor = function(e){
    if(rflag===1){
        let elw = redbox.clientWidth;
        let elh = redbox.clientHeight;
        let xi = 0;
        let yupsilon = 0;

        if(e.type==="touchmove"){
            var rect = e.target.getBoundingClientRect();
            xi = e.targetTouches[0].pageX - rect.left;
            yupsilon = e.targetTouches[0].pageY - rect.top;

        } else {
            xi = e.offsetX;
            yupsilon = e.offsetY;

        };

        let perx = (xi/elw)*100;
        let pery = (yupsilon/elh)*100;
        let leftness = 100-perx;
        let height = 100-pery;

        let bt = 5*(height-50);
        
        let dk = 255 - (5.1*(pery-50));

        redbox.style.filter = `grayscale(${leftness}%)`;
        if((100-pery)>=50){

            redbox.style.backgroundColor = `rgba(255,${bt},${bt},1)`;
        } else {
            redbox.style.backgroundColor=`rgba(${dk},0,0,1)`;

    }}
    else{null};
    
};

const blue_recolor = function(e){
    if(bflag===1){
        let elw = bluebox.clientWidth;
        let elh = bluebox.clientHeight;
        let xi = 0;
        let yupsilon = 0;

        if(e.type==="touchmove"){
            var rect = e.target.getBoundingClientRect();
            xi = e.targetTouches[0].pageX - rect.left;
            yupsilon = e.targetTouches[0].pageY - rect.top;

        } else {
            xi = e.offsetX;
            yupsilon = e.offsetY;

        };

        let perx = (xi/elw)*100;
        let pery = (yupsilon/elh)*100;
        let leftness = 100-perx;
        let height = 100-pery;

        let bt = 5*(height-50);
        
        let dk = 255 - (5.1*(pery-50));

        bluebox.style.filter = `grayscale(${leftness}%)`;
        if((100-pery)>=50){

            bluebox.style.backgroundColor = `rgba(${bt},${bt},255,1)`;
        } else {
            bluebox.style.backgroundColor=`rgba(0,0,${dk},1)`;

    }} 
    else {null};
    
};


['mousemove','touchmove'].forEach(e=>greenbox.addEventListener(e,green_recolor));
greenbox.addEventListener('click', () => gflag = gflag * -1);

['mousemove','touchmove'].forEach(e=>bluebox.addEventListener(e,blue_recolor));
bluebox.addEventListener('click', () => bflag = bflag * -1);

['mousemove','touchmove'].forEach(e=>redbox.addEventListener(e,red_recolor));
redbox.addEventListener('click', () => rflag = rflag * -1);


