# Shalow Copy
### [Shallow copy MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy)
A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.


# Deep Copy
### [Deep copy MDN Docs](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)
A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too. That behavior contrasts with the behavior of a shallow copy, in which changes to nested properties in the source or the copy may cause the other object to change too.

# Simply Put :
- **Shallow Copy**: Copies the object but keeps references to the same nested objects. Changes to nested objects affect both copies.
- **Deep Copy**: Copies the object and all nested objects, creating entirely new instances.
