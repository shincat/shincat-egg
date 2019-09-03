const Controller = require('../../core/controller');
const fs = require('fs');
const path=require('path');
class jssdk extends Controller {
    //map=new Map();
    async init() {
        if(!this.map) this.map=new Map();
        const { ctx } = this;
        let url=ctx.url;
        url=url.replace('/jssdk/',"");
        let filename=ctx.params.filename || url;
        if(filename.indexOf('.')<0) {
            filename+="/index.html";
        }
        console.log({filename})
        try{
            let _path=path.join(__dirname,"../../jssdk/",filename);
            let file=fs.readFileSync(_path,{
                encoding:'utf-8'
            });
            ctx.set('filestate','new');
            this.map.set(_path,file);
            ctx.body = file;
            /*if(!this.map.get(_path))
            {
               
            }
            else{
                ctx.set('filestate','from membery');
                let file=this.map.get(_path);
                console.log(file);
                ctx.body = file;
            }*/
            
            
        }
        catch(e)
        {
            ctx.status=404;
            ctx.body="OPPPS!FILE NOT EXISTS!";
        }
    }
}
module.exports = jssdk;