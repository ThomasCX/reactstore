import {useEffect} from "react";

window.OneSignal = window.OneSignal || [];
const OneSignal = window.OneSignal;

const useScript  = url => {

    useEffect(() => {
        OneSignal.push(() => {
            OneSignal.init(
                {
                    appId: "61c24622-d598-49e0-aeaa-a9f5715c8c0f", //STEP 9
                    promptOptions: {
                        slidedown: {
                            enabled: true,
                            actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
                            acceptButtonText: "Yes",
                            cancelButtonText: "No",
                            categories: {
                                tags: [
                                    {
                                        tag: "react",
                                        label: "ReactJS",
                                    },
                                    {
                                        tag: "angular",
                                        label: "Angular",
                                    },
                                    {
                                        tag: "vue",
                                        label: "VueJS",
                                    },
                                    {
                                        tag: "js",
                                        label: "JavaScript",
                                    }
                                ]
                            }
                        }
                    },
                    welcomeNotification: {
                        "title": "One Signal",
                        "message": "Thanks for subscribing!",
                    }
                },
                //Automatically subscribe to the new_app_version tag
                OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
                    // Callback called when tag has finished sending
                    console.log('new_app_version TAG SENT', tagsSent);
                })
            );
        });
    }, [url])
}

// export default useScript;
