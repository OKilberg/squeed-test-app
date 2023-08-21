import { createServer, Model } from "miragejs"

export function makeServer({ environment = "test" } = {}) {
    let server = createServer({
      environment,
  
      models: {
        item: Model,
      },
  
      seeds(server) {
        server.create("item", { name: "Mac Computer", amount: 11 })
        server.create("item", { name: "Standing Desk", amount: 3 })
        server.create("item", { name: "Coffee Mug", amount: 37 })
      },
  
      routes() {
        this.namespace = "api"
  
        this.get("/inventory", (schema) => {
          return schema.inventory.all()
        })
      },
    })
  
    return server
  }
  