// https://gist.github.com/mombrea/6598272#file-twitter-url-parsers

export function parseURL(str) {
    return str.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+.[A-Za-z0-9-_:%&~?/.=]+/g, function(url) {
        return url.link(url);
    });
}

export function parseUsername(str) {
    return str.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
        var username = u.replace('@', '')
        return u.link('https://twitter.com/' + username);
    });
}

export function parseHashtag(str) {
    return str.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace('#', '%23')
        return t.link('https://twitter.com/search?q=' + tag + '&src=hash');
    });
}
