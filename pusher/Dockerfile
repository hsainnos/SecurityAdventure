# The building of ProtoBuf "messages" must be done out of Docker because grpc-node does not ship with ARM64 binaries.
# See: https://github.com/grpc/grpc-node/issues/1405
# When the issue above is closed, we can move back messages building inside Dockerfile

# protobuf build
#FROM node:14.18.2-buster-slim@sha256:20bedf0c09de887379e59a41c04284974f5fb529cf0e13aab613473ce298da3d as proto-builder
#WORKDIR /usr/src
#COPY messages/yarn.lock messages/package.json ./
#RUN yarn install
#COPY messages .
#RUN yarn proto

# typescript build
FROM node:14.18.2-buster-slim@sha256:20bedf0c09de887379e59a41c04284974f5fb529cf0e13aab613473ce298da3d as builder
WORKDIR /usr/src
COPY pusher/yarn.lock pusher/package.json ./
RUN yarn install
COPY pusher .
#COPY --from=proto-builder /usr/src/generated src/Messages/generated
#COPY --from=proto-builder /usr/src/JsonMessages src/Messages/JsonMessages
ENV NODE_ENV=production
RUN yarn run tsc

# final production image
FROM node:14.18.2-buster-slim@sha256:20bedf0c09de887379e59a41c04284974f5fb529cf0e13aab613473ce298da3d
WORKDIR /usr/src
COPY pusher/yarn.lock pusher/package.json ./
ENV NODE_ENV=production
RUN yarn install --production
COPY --from=builder /usr/src/dist /usr/src/dist

USER node
CMD ["yarn", "run", "runprod"]
