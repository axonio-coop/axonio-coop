import { Context } from 'lithor';

export default function(args: string, ctx: Context){

    if(ctx.data?.title){
        return `${ctx.data.title} · ${ctx.config.name}`;
    }else{
        return ctx.config.name;
    }

}