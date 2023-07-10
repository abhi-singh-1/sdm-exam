FROM 172.18.0.52:5000/node 

WORKDIR /src


COPY . .

# expose port 4092 as the express server will listen on 5000
EXPOSE 4099

CMD node server.js