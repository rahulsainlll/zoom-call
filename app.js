document.getElementById('start').addEventListener('click', () => {
    // Configure Jitsi Meet API
    const domain = 'meet.jit.si';  // Your local server's domain
    
    const options = {
        roomName: 'JitsiScreenSharingRoom',  // Room name
        parentNode: document.getElementById('jitsi-container'),
        devices: {
            audioInput: false,
            videoInput: false
        }
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    // Trigger screen sharing when the conference is joined
    api.addEventListener('videoConferenceJoined', () => {
        api.executeCommand('toggleShareScreen');
    });

    // Optional: Handling events for screen sharing start/stop
    api.addEventListener('screenSharingStatusChanged', (event) => {
        console.log('Screen sharing status changed:', event);
    });
});
