FROM node:lts-alpine
RUN apk update && apk add bash
RUN apk add --no-cache libc6-compat
RUN mkdir -p /home/todo-app/node_modules && chown -R node:node /home/todo-app
#RUN mkdir -p /home/todo-app/.next && chown -R node:node /home/todo-app/.next

ENV NEXT_TELEMETRY_DISABLED 1

WORKDIR /home/todo-app
COPY --chown=node:node package*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm install
RUN npm run build

#COPY --chown=next:node /.next/static ./.next/static
RUN chown -R node:node /home/todo-app/.next
COPY --chown=node:node /public ./public

USER node

EXPOSE 3000

ENV PORT 3000

CMD npm start
#CMD npm run dev


#HOW TO RUN
#docker build -t deviceai5554/simple-todoapp .
#docker run --name simple-todoapp --restart=on-failure -p 3000:3000 -d deviceai5554/simple-todoapp
