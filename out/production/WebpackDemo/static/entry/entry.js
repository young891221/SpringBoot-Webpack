/**
 * Created by KimYJ on 2016-12-05.
 */
import hello from  './hello';
import world from  './world';
import developer from  './developer';

let main = {hello: hello};
main.word = world;

let dev = new developer('hansung', 'dell');
main.dev = dev.getDeveloperItem();

document.write(`${hello}, ${world}!`);
document.write(main.dev);
//document.write('set 이전의 project = '+dev.project);
dev.project = 'SpringBoot-Webpack';
//document.write('set 이후의 project = '+dev.project);


export default main.dev;