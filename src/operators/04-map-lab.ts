
import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const text = document.createElement('div');

text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius vestibulum magna id volutpat. Vivamus pretium ante euismod, imperdiet eros nec, lacinia metus. Morbi luctus id tellus ac vehicula. Praesent dui ante, porttitor et nisi ut, scelerisque gravida ligula. In ipsum metus, porttitor eget tellus ut, lobortis efficitur augue. Suspendisse maximus mi vitae nunc ullamcorper convallis. Nam viverra, risus at interdum condimentum, mi metus sagittis lorem, non cursus ante risus nec eros. Nulla eleifend, magna non ultrices finibus, dui neque tempor risus, facilisis rutrum est augue eu eros. Morbi mattis mauris vel arcu commodo aliquam. Fusce ex tellus, sodales convallis consectetur non, pretium ac enim. Suspendisse finibus neque eu sem eleifend egestas. Nunc eget metus turpis. Quisque ex nunc, tempus ut rutrum sed, pharetra condimentum felis. Phasellus pretium arcu ultricies nisi tincidunt tempor. Nunc eget vulputate mauris. Duis elit libero, posuere in vehicula et, bibendum at libero.
<br/><br/>
Nunc iaculis nibh vitae mauris mollis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ultrices pharetra tempor. Nam vel lacus a lacus lobortis sollicitudin. Sed lectus augue, euismod a sagittis vel, porttitor mollis velit. Curabitur posuere augue sed accumsan auctor. Nullam risus nunc, blandit a dignissim nec, pharetra non quam. Donec rutrum nulla id mauris ullamcorper auctor. Curabitur et risus risus. Integer tempus quam eget tortor molestie mollis. Phasellus laoreet sagittis mollis.
<br/><br/>
Suspendisse eu gravida massa, nec vehicula turpis. Morbi id iaculis odio. Proin tellus metus, convallis et risus eu, dignissim imperdiet risus. Fusce nec leo massa. Sed convallis justo ut pharetra mollis. Donec id nibh quis orci varius tempus. In dignissim eros felis, vitae hendrerit tortor semper ac. In augue libero, convallis vitae dolor in, congue maximus sapien. Aliquam vitae ex laoreet, posuere risus at, laoreet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut gravida, felis at euismod vulputate, velit dui dapibus sem, sed iaculis purus diam non sem. Nullam commodo purus diam, a fermentum nisl dignissim in.
<br/><br/>
Vivamus ultrices vulputate enim eu bibendum. Duis sit amet ante nisi. Mauris vel arcu vel sapien maximus malesuada. In non sagittis metus, nec placerat ipsum. Suspendisse finibus in ex quis scelerisque. Nullam et lorem non nunc aliquet vestibulum eget vel felis. Pellentesque commodo, massa tempus fringilla vehicula, augue neque lobortis lacus, non porttitor nibh est pretium metus. Aliquam vel euismod nulla, a accumsan sapien. Nunc rutrum dapibus odio, ut mollis risus eleifend vitae.
<br/><br/>
Aenean a augue dui. Duis eget egestas lacus. Ut in ligula vitae ante lobortis ultrices eu non nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam imperdiet vitae sem et euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam mattis, est vitae mollis semper, erat mi efficitur nisi, et dapibus enim ipsum ac erat. Duis nulla diam, porttitor eget fringilla eu, interdum eget neque. Proin lectus ante, dictum sit amet gravida at, consectetur in tellus. Proin efficitur risus sed arcu mollis volutpat. Nulla auctor varius tellus, at pretium lacus dictum ut. Curabitur nec condimentum diam.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius vestibulum magna id volutpat. Vivamus pretium ante euismod, imperdiet eros nec, lacinia metus. Morbi luctus id tellus ac vehicula. Praesent dui ante, porttitor et nisi ut, scelerisque gravida ligula. In ipsum metus, porttitor eget tellus ut, lobortis efficitur augue. Suspendisse maximus mi vitae nunc ullamcorper convallis. Nam viverra, risus at interdum condimentum, mi metus sagittis lorem, non cursus ante risus nec eros. Nulla eleifend, magna non ultrices finibus, dui neque tempor risus, facilisis rutrum est augue eu eros. Morbi mattis mauris vel arcu commodo aliquam. Fusce ex tellus, sodales convallis consectetur non, pretium ac enim. Suspendisse finibus neque eu sem eleifend egestas. Nunc eget metus turpis. Quisque ex nunc, tempus ut rutrum sed, pharetra condimentum felis. Phasellus pretium arcu ultricies nisi tincidunt tempor. Nunc eget vulputate mauris. Duis elit libero, posuere in vehicula et, bibendum at libero.
<br/><br/>
Nunc iaculis nibh vitae mauris mollis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ultrices pharetra tempor. Nam vel lacus a lacus lobortis sollicitudin. Sed lectus augue, euismod a sagittis vel, porttitor mollis velit. Curabitur posuere augue sed accumsan auctor. Nullam risus nunc, blandit a dignissim nec, pharetra non quam. Donec rutrum nulla id mauris ullamcorper auctor. Curabitur et risus risus. Integer tempus quam eget tortor molestie mollis. Phasellus laoreet sagittis mollis.
<br/><br/>
Suspendisse eu gravida massa, nec vehicula turpis. Morbi id iaculis odio. Proin tellus metus, convallis et risus eu, dignissim imperdiet risus. Fusce nec leo massa. Sed convallis justo ut pharetra mollis. Donec id nibh quis orci varius tempus. In dignissim eros felis, vitae hendrerit tortor semper ac. In augue libero, convallis vitae dolor in, congue maximus sapien. Aliquam vitae ex laoreet, posuere risus at, laoreet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut gravida, felis at euismod vulputate, velit dui dapibus sem, sed iaculis purus diam non sem. Nullam commodo purus diam, a fermentum nisl dignissim in.
<br/><br/>
Vivamus ultrices vulputate enim eu bibendum. Duis sit amet ante nisi. Mauris vel arcu vel sapien maximus malesuada. In non sagittis metus, nec placerat ipsum. Suspendisse finibus in ex quis scelerisque. Nullam et lorem non nunc aliquet vestibulum eget vel felis. Pellentesque commodo, massa tempus fringilla vehicula, augue neque lobortis lacus, non porttitor nibh est pretium metus. Aliquam vel euismod nulla, a accumsan sapien. Nunc rutrum dapibus odio, ut mollis risus eleifend vitae.
<br/><br/>
Aenean a augue dui. Duis eget egestas lacus. Ut in ligula vitae ante lobortis ultrices eu non nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam imperdiet vitae sem et euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam mattis, est vitae mollis semper, erat mi efficitur nisi, et dapibus enim ipsum ac erat. Duis nulla diam, porttitor eget fringilla eu, interdum eget neque. Proin lectus ante, dictum sit amet gravida at, consectetur in tellus. Proin efficitur risus sed arcu mollis volutpat. Nulla auctor varius tellus, at pretium lacus dictum ut. Curabitur nec condimentum diam.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc varius vestibulum magna id volutpat. Vivamus pretium ante euismod, imperdiet eros nec, lacinia metus. Morbi luctus id tellus ac vehicula. Praesent dui ante, porttitor et nisi ut, scelerisque gravida ligula. In ipsum metus, porttitor eget tellus ut, lobortis efficitur augue. Suspendisse maximus mi vitae nunc ullamcorper convallis. Nam viverra, risus at interdum condimentum, mi metus sagittis lorem, non cursus ante risus nec eros. Nulla eleifend, magna non ultrices finibus, dui neque tempor risus, facilisis rutrum est augue eu eros. Morbi mattis mauris vel arcu commodo aliquam. Fusce ex tellus, sodales convallis consectetur non, pretium ac enim. Suspendisse finibus neque eu sem eleifend egestas. Nunc eget metus turpis. Quisque ex nunc, tempus ut rutrum sed, pharetra condimentum felis. Phasellus pretium arcu ultricies nisi tincidunt tempor. Nunc eget vulputate mauris. Duis elit libero, posuere in vehicula et, bibendum at libero.
<br/><br/>
Nunc iaculis nibh vitae mauris mollis tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam ultrices pharetra tempor. Nam vel lacus a lacus lobortis sollicitudin. Sed lectus augue, euismod a sagittis vel, porttitor mollis velit. Curabitur posuere augue sed accumsan auctor. Nullam risus nunc, blandit a dignissim nec, pharetra non quam. Donec rutrum nulla id mauris ullamcorper auctor. Curabitur et risus risus. Integer tempus quam eget tortor molestie mollis. Phasellus laoreet sagittis mollis.
<br/><br/>
Suspendisse eu gravida massa, nec vehicula turpis. Morbi id iaculis odio. Proin tellus metus, convallis et risus eu, dignissim imperdiet risus. Fusce nec leo massa. Sed convallis justo ut pharetra mollis. Donec id nibh quis orci varius tempus. In dignissim eros felis, vitae hendrerit tortor semper ac. In augue libero, convallis vitae dolor in, congue maximus sapien. Aliquam vitae ex laoreet, posuere risus at, laoreet magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut gravida, felis at euismod vulputate, velit dui dapibus sem, sed iaculis purus diam non sem. Nullam commodo purus diam, a fermentum nisl dignissim in.
<br/><br/>
Vivamus ultrices vulputate enim eu bibendum. Duis sit amet ante nisi. Mauris vel arcu vel sapien maximus malesuada. In non sagittis metus, nec placerat ipsum. Suspendisse finibus in ex quis scelerisque. Nullam et lorem non nunc aliquet vestibulum eget vel felis. Pellentesque commodo, massa tempus fringilla vehicula, augue neque lobortis lacus, non porttitor nibh est pretium metus. Aliquam vel euismod nulla, a accumsan sapien. Nunc rutrum dapibus odio, ut mollis risus eleifend vitae.
<br/><br/>
Aenean a augue dui. Duis eget egestas lacus. Ut in ligula vitae ante lobortis ultrices eu non nisi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam imperdiet vitae sem et euismod. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam mattis, est vitae mollis semper, erat mi efficitur nisi, et dapibus enim ipsum ac erat. Duis nulla diam, porttitor eget fringilla eu, interdum eget neque. Proin lectus ante, dictum sit amet gravida at, consectetur in tellus. Proin efficitur risus sed arcu mollis volutpat. Nulla auctor varius tellus, at pretium lacus dictum ut. Curabitur nec condimentum diam.
`;

const body = document.querySelector('body');

body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);

//function to calculate
const calculatePercentageScroll = (event) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}


//Streams

const scroll$ = fromEvent(document, 'scroll');
//scroll$.subscribe(console.log)
const progress$ = scroll$.pipe(
    map(event => calculatePercentageScroll(event)), // map(calcularePercentageScroll)
    tap(console.log)
);

//The subscription
progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
})
