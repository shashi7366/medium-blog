
import {Hono} from "hono";
import {verify} from "hono/jwt";


const api=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    },
    Variables:{
        userId:string
    }
}>();


api.use("*", async (c, next) => {
    try {
      const header = c.req.header("authorization");
  
      const token = header?.split(" ")[1];
  
      if (!token) {
        throw new Error();
      }
        const decoded=await verify(token,c.env.JWT_SECRET);
  
        if(decoded){
          c.set("userId",decoded.userId);
          await next();
        }
    }catch(exp: any){
      c.status(404);
      return c.json({message:"not authorized"});
    }
  });



api.post("/", async (c) => {
    try{
        //@ts-ignore
        const prisma=c.get("prisma");

        const body=await c.req.json();
        const userId=c.get("userId");

        const post=await prisma.post.create({
            data:{
                title:body.title,
                content:body.content,
                authorId:userId
            }
        });

        c.status(200);
        return c.json({message:"post added successfully",id:[post.id]});
    }catch(exp:any){
        return c.json({error:exp.message});
    }
  })
  
  api.put("/", async (c) => {
    try{
        //@ts-ignore
        const prisma=c.get("prisma");

        const body=await c.req.json();
        const userId=c.get("userId");

        const post=await prisma.post.update({
            where:{
                authorId:userId,
                id:body.id
            },
            data:{
                title:body.title,
                content:body.content
            }
        });

        return c.json({message:"post updated successfully",post});
    }
    catch(exp:any){
        c.status(500);
        return c.json({error:exp.message});
    }
  })
  
  api.get("/:id", async (c) => {
    try{
        //@ts-ignore
        const prisma=c.get("prisma");

       const id=c.req.param("id")

        const post=await prisma.post.findUnique({
            where:{
                id:id
            },
            include:{
                author:{select:{name:true}}
            }
        });

        return c.json({message:"success",post});
    }
    catch(exp:any){
        c.status(500);
        return c.json({error:exp.message});
    }
  })
  
  
  api.post("/bulk", async (c) => {
    try{
        //@ts-ignore
        const prisma=c.get("prisma");

       

        const posts=await prisma.post.findMany({
            include:{
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        
        console.log("hi");

        return c.json({posts});
    }
    catch(exp:any){
        c.status(500);
        return c.json({error:exp.message});
    }
  })


  export default api;