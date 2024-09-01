## Data structures

These are critical since they offer unique advantages for different types of problems. Knowing when to use them can make software more efficient, scalable and easier to manager. They are the backbone of many algorithms and systems.

These are important in how I organise, process and analyse data. This is particularly in terms of:

1. **Text Data Structuring and Organisation.** They can represent hierarchical structures in text data, or classification tasks. Graphs can represent relationships between text data. 
2. **Efficient data retrieval and processing.** Useful when prioritising certain operations, e.g. finding the most relevant or frequent term, topics etc. Heaps can help do this. 
3. Pattern recognition and relationship mapping.
4. Handling relationships and dependences
5. Data representation and analysis

# Types of Data Structures

1. **Array** - a collection of items stored at contiguous (next to or touching) memory locations, e.g. [10, 20, 30]. These are a simple and efficient way to store multiple items of the same type. Used to store lists of items to be accessed frequently.
2. **Linked lists** - a Linear Data Structure of elements (*nodes*) are stored in memory as individual entities, each node contrains a data and a reference, e.g. '10 -> 20 -> 30' with each node poiting to the nexdt. These are more flexible than arrats as it's easer to insert/delete elements, they're not contiguous. 
3. **Stack** - a Linear Data Structure that follows the Last In, Last Out principle, e.g. if you add '10' then '20', you remove '20' first. These are really important when you need to maintain a history of operations or reverse actions, backtracking.
4. **Queue** - a Linear Data Structures that follows First In, First Out principle, the first will be removed. Important for when order of operations matters, e.g. processing tasks in the order they arrive.
5. **Tree** - a hierarchical data structure consisting of nodes with a root and branch (or child/parent), e.g. file systems. These are more flexible than linear data structures and allow better retrieval and manipulation.
    1. **Binary Tree** - each tree has at most two children, the left and right child. Offer a structured way to store data and are the basis for more complex trees.
    2. **Binary Search Tree (BST)** - binary tree with additional constraint - all left child must be less than the node's value and the right, greater. They maintain a sorted order of elements. An **AVL Tree** that is self-balancing it carries extra information (its *Balance Factor*) that allows the tree to balance themselves by rotating sub-trees in different manners.
    3. **Full binary tree** - where every node has either 0 or 2 children, never just 1.
    4. **Complete binary tree** - all levels are completely filled in, except possibly the last.
    5. **Balanced tree** - a binary tree where the heigh of the left and right of any nod differ by no more than one.
    6. **Unbalanced tree** - where it is greater than one. These can degrage performance, but they illustrate the challenges of maintaining efficiency in tree structures.
    8. **B-Trees** - a self-balanced search tree data structure that helps keep everything in order while making it easy to add new nodes or remove old ones. Useful in a large systems like databases or file systems. 
6. **Hash table** - a data structure that maps keys to values for efficient lookup, using a hash function, e.g. like a dictionary where you look up a word (key) to find its definition (value). Offer faster retrieval based on keys. 
7. **Graphs** - a collection of *nodes* (or vertices) and *edges* connect pairs of nodes, they used to model relationships between different objects. Like a social network where each person is a node and each connection between people is an edge. They are crucial for representing and analysing relationships between different entitities in Network Analysis, Pathfinding and Dependency Management.
    1. **Directed graph** - a graph where the edges have a direction, from one note to another. Important for when relationships have a direction. 
    2. **Undirected graph** - the edges have no direction, or are bidirectional, making them essential in systems where connections are mututal
    3. **Spanning tree** - a subgraph of a graph that includes all vertices of the original graph but with the minimum number of edges to form a tree.
    4. **Representation** - an *adjacency list* is a way of representing a graph where each node stores a list of adjacent notes, and an *adjancency matrix* is a way to represent a 2D array. 
8. **Heap** - a special tree-based data structure that satisfies the *heap* property. E.g. max-heap the parent node is always greater than or equal to its children, min-heap, the opposite. 