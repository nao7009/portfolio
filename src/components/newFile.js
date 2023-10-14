export default (await import('vue')).default.extend({
name: "Modal",
components: {
ModalContents,
ModalBtn,
},
props: ["modalItems"],
data() {
return {
modalFlg: false,
};
},
});
