import whatInput from 'what-input' // eslint-disable-line no-unused-vars

const onInitialClientRender = () => {
  const inViewAnimateElements = document.querySelectorAll('.js-block-animated')

  inViewAnimateElements.forEach((element) => {
    element.addEventListener('sal:in', ({ detail }) => {
      detail.target.classList.add('is-inview')
    })
  })
}
export { onInitialClientRender }
