const personDetail = {
    name: "ndidls",
    id: "3324234",
    address: "gasi",
    phone: "03405i30850",
    gfNane: "itis",
    friends: ["abir", "bla bla", "ski ski"]
}

// const gfName = personDetail.gfNane;
// const phone = personDetail.phone;
// useing destructureing
const {phone, gfNane, id} = personDetail;

console.log(gfNane, phone);


// destructure with Array
const friends = ["abir", "bla bla", "ski ski", "daad", "gadf"];
const [chotoFriend, ...all] = friends;

console.log(chotoFriend, all);