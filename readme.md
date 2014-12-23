# wsscat

Use wsscat to listen for incoming connections

```
wsscat -l 3000 > log.txt
```

Or to connect to an existing server.

```
echo "hello" | wsscat -c ws://localhost:3000
```

## Install
```
npm install -g seanewest/wsscat
```

## Usage
```
Usage: wsscat [-l port] [-c address]
```
