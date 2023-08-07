// priority: 0

onEvent('item.registry', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
})

onEvent('block.registry', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
	event.create('inf_dirt')
  	   .material('dirt')
       .hardness(0.5)
       .displayName('Dirt') // No longer required in 1.18.2+
	   .noDrops()
	   .noItem()
	   .requiresTool(false)
	   .harvestTool('shovel', 0)
})
