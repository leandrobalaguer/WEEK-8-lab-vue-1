
new Vue({
  el: 'form',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  },

  methods: {
    onSubmit(){
      fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items', {
        method: 'POST',
           headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "X-API-Key": "a0wwnrex_JeRhBybn5iFYziStv9d2M6Mchd2b4B4H"
        },
        body: JSON.stringify({
          name: this.name,
          email: this.email,
          phone: this.phone,
          message: this.message
        }),
     
      })
        .then((response)=> response.json())
        .then((json)=> console.log(json));
    },
    mounted() {
      fetch('https://database.deta.sh/v1/a0wwnrex/contactmessages/items')
        .then(response => {
          if (response.ok) return response.json()
          else return new Error("Error")
        })
        .then(json => (json));
        }
    }

  });