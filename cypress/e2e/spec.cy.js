describe('Assuirity testing coding exercise', () => {
  beforeEach(() => {
    cy.request('/Categories/6328/Details.json?catalogue=false').as(
      'categoryRequest'
    )
  })
  it('API response Health check - GET', () => {
    cy.get('@categoryRequest').then((request) => {
      expect(request.status).to.eq(200)
      assert.isObject(request.body, `Response body is an Object`)
    })
  })
  it('Criteria 1: Name element = "Badges"', () => {
    cy.get('@categoryRequest').then((request) => {
      const category = request.body
      assert.exists(category.Name, `Response attribute 'Name' exists`)
      expect(category.Name).to.eq('Badges')
    })
  })
  it('Criteria 2: CanRelist element = true', () => {
    cy.get('@categoryRequest').then((request) => {
      const category = request.body
      assert.exists(category.CanRelist, `Response attribute 'CanRelist' exists`)
      expect(category.CanRelist).to.be.true
    })
  })
  it('Criteria 3: Promotions element Name = "Feature" & Description contains text "Better position in category"', () => {
    cy.get('@categoryRequest').then((request) => {
      const category = request.body
      assert.exists(
        category.Promotions,
        `Response attribute 'Promotions' exists`
      )
      const feature = category.Promotions.find((p) => p.Name === 'Feature')
      assert.exists(feature, `Promotions feature exists`)
      expect(feature.Description).to.contain('Better position in category')
    })
  })
})
