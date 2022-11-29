import { writable } from 'svelte/store';

type Links = {
    slack: Link;
    google: Link;
    atlassian: Link;
}

type Link = {
    linkURL: string;
    linked: boolean;
}

export let loggedIn = writable(false);
export let linkableAccounts = writable<Links>({
    google: { linkURL: "", linked: false },
    atlassian: { linkURL: "", linked: false },
    slack: { linkURL: "", linked: false }
});



