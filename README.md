# react-native

 ScrollView Optimization:
   To get rid of lagging/slow app, we will use FlatList insteadt of ScrollView
   so that app performance could be more better 
   FlatList have a "data" Prop and "renderItem" prop, Flat List always work on Key property not on id 
   We dont use map() in FlatList instead we use "data" and to access
  item one by one , we use renderItem
  In short, FlatList is much more optimized than ScrollView
  We cann not use styles for button tag, React native provide us a prop
  through which we can change its color/styles, i.e