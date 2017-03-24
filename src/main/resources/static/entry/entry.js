/**
 * Created by KimYJ on 2016-12-05.
 */
import hello from  './hello';
import world from  './world';
import developer from  './developer';

let main = {hello: hello};
main.word = world;

let dev = new developer('hansung', 'dell1234');
main.dev = dev.getDeveloperItem();

document.write(`${hello}, ${world}!`);
document.write(main.dev);

export default main.dev;