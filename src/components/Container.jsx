import Input from "./Input";
import List from "./List";
import repoService from './../services/repoService';
import { useState } from 'react';


const Container = () => {
    const [reposList, setRepos] = useState([]);
    const handleSubmit = async (user) => {
        const reposListFromServer = await repoService(user);
        setRepos(reposListFromServer);
    }
    return (
        <div data-testid="general-repo-container">
            <h2>טופס חיפוש שם משתמש בגיטהאב</h2>
            <Input handleSubmit={handleSubmit} />
            <List repos={reposList} />
        </div>
    )
}

export default Container;