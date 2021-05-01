handleSubmit(e); {

    e.preventDefault();

    fetch('http://localhost:8080/send', {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(
        (response) => (response.json())
    ).then((response) => {
        if (response.status === 'success') {
            alert("Message Sent.");
            this.resetForm()
        } else if (response.status === 'fail') {
            alert("Message failed to send.")
        }
    })
}