function bald(x) {
    let hair = (x.match(/\//g) || []).length;

    return [x.replaceAll("/", "-"), (
        hair == 0 ? "Clean!" :
        hair == 1 ? "Unicorn!" :
        hair == 2 ? "Homer!" :
        hair >= 3 && hair <= 5 ? "Careless!" :
        "Hobo!"
    )]
}