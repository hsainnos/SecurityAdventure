# The building of ProtoBuf "messages" must be done out of Docker because grpc-node does not ship with ARM64 binaries.
# See: https://github.com/grpc/grpc-node/issues/1405
# When the issue above is closed, we can move back messages building inside Dockerfile

# protobuf build
#FROM node:14.18.2-buster-slim@sha256:20bedf0c09de887379e59a41c04284974f5fb529cf0e13aab613473ce298da3d as proto-builder
#WORKDIR /usr/src
#COPY messages/yarn.lock messages/package.json ./
#RUN yarn install
#COPY messages .
#RUN yarn ts-proto

# typescript build
FROM node:14.18.2-buster-slim@sha256:20bedf0c09de887379e59a41c04284974f5fb529cf0e13aab613473ce298da3d as builder
WORKDIR /usr/src
COPY front/yarn.lock front/package.json ./
RUN yarn install --network-timeout 1000000
COPY front .
#COPY --from=proto-builder /usr/src/ts-proto-generated/protos src/Messages/ts-proto-generated
#RUN sed -i 's/import { Observable } from "rxjs";/import type { Observable } from "rxjs";/g' src/Messages/ts-proto-generated/messages.ts
#COPY --from=proto-builder /usr/src/JsonMessages src/Messages/JsonMessages
RUN yarn run typesafe-i18n && yarn run build-iframe-api && yarn build

# final production image
FROM nginx:1.21.6-alpine

COPY front/nginx.conf /etc/nginx/conf.d/default.conf
COPY front/templater.sh /

COPY --from=builder /usr/src/dist /usr/share/nginx/html

EXPOSE 80
CMD ["/bin/sh", "-c", "/templater.sh && envsubst < /usr/share/nginx/html/env-config.template.js > /usr/share/nginx/html/env-config.js && exec nginx -g 'daemon off;'"]
