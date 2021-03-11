import { Service } from '@vtex/api'

export default new Service({
  graphql: {
    resolvers: {
      Query: {
        helloworld: () => `Numero de Servicio: ${Math.random()}`,
      },
    },
  },
})
