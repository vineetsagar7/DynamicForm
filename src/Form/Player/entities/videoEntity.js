

class VideoEntity {

    sendVideo() {
        var x = fetch('https://jsonplaceholder.typicode.com/comments');
        fetch('https://mywebsite.com/endpoint/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })
    }


};

export default VideoEntity;