import moment from 'moment'

export default {
    methods: {
        moment: function () {
            return moment();
          }
    },
    filters: {
        reduceLength(value) {
          return `${value.substring(0, 201)}...`;
        },
        toUppercase(value){
       return value.toUpperCase()
        },
         moment: function (date) {
        return moment(date).format('MMMM Do YYYY, h:mm:ss a');
      }
      }, 
  };