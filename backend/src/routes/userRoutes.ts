import {Hono} from "hono";
import {sign} from "hono/jwt"



const api=new Hono<{
    Bindings:{
        DATABASE_URL:string,
        JWT_SECRET:string
    }
}>();

api.post("/signup", async (c) => {

    const body = await c.req.json();
  //@ts-ignore
    const prisma =c.get("prisma")
  
  
  
    try {
  
      const user = await prisma.user.create({
        data: {
          email: body.email,
          password: body.password,
          name:body.name
        }
      });
  
      const jwt = await sign({ userId: user.id }, c.env.JWT_SECRET);
  
      return c.json({ message: "signup successful", token: `Bearer ${jwt}` });
    } catch (exp: any) {
      c.status(500);
      return c.text(exp.message);
    }
  });
  
  api.post("/signin", async (c) => {
  
    const body = await c.req.json();
  
    // const prisma = new PrismaClient({
    //   datasourceUrl: c.env.DATABASE_URL,
    // }).$extends(withAccelerate());
  
  //@ts-ignore
    const prisma =c.get("prisma");
  
    try {
  
      const user = await prisma.user.findUnique({
        where: {
          email: body.email,
          password: body.password
        }
      });
  
      if (!user) {
        c.status(404);
        return c.json({ message: "invalid credentials" });
      }
  
      const jwt = await sign({ userId: user.id }, c.env.JWT_SECRET);
  
      return c.json({ message: "login successful", token: `Bearer ${jwt}` });
    } catch (exp: any) {
      c.status(400);
      return c.json({ message: exp.message });
    }
  });


  export default api;