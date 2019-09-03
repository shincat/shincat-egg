const fileUtils=require('../core/utils/folderDisplayer');
const path=require('path');
describe('folder index test',()=>{
    it('foldertest',()=>{
        const obj=fileUtils.getFolder(path.resolve(__dirname,'../core/'));
        console.info(obj);
    })
})