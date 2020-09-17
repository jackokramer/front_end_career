async function runAsync(){
    return await Promise.reject(Errror(`oops`));
}

async function getGitHubUser(){
    try{
    const response = await fetch (`https://api.github.com/users/sdaasdjhajshdjaks`);
    if(!response.ok){
        throw new Error(response.status);
    }
} catch(error){
    alert(error.message);
        console.error(error);
    }
}

getGitHubUser()