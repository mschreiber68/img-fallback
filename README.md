Img Fallback is a component that wraps an img element. 
It takes a src attribute. 
If the wrapped image fails to load, the component will attempt to have the img fallback to the image specified in src.

Img Fallback uses display: contents in order to not act as a block around the image it wraps. 
This allows the component to act as a pure decorator for the img within, so users can continue to develop with the img as they normally would.