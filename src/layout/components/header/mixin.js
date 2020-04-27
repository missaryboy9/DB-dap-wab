export default {
  methods: {
    creal(e) {
      if (e instanceof Array) {
        e.forEach(element => {
          this[element] = '';
        });
      } else {
        this[e] = '';
      }
    },
    checktheme(e) {
      e.checked = true;
      this.themelist.forEach(element => {
        if (element.name !== e.name) {
          element.checked = false;
        }
      });
    },
    logout() {
      this.$store.dispatch('setlogin/ansyrouterdata', false);
      this.$store.dispatch('setlogin/routerdata', []);
      this.$router.push(`/login?redirect=${this.$route.fullPath}`);
      sessionStorage.removeItem('vuex');
    }
  }
};
