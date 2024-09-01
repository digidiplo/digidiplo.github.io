## Preprocessing Data (Normalise and Standardise)

Normalisation and standardisation are two techniques to preprocess data, particularly in ML and statistical analysis. 

- **data normalisation** - the process of rescaling one or more attributes to the range of 0 to 1. It's useful when you don't know the distribution of your date or the distribution is not Gaussian (a bell curve)
- **data standardisation** - rescaling one or more attributes so they have a mean of 0 and a standard dev of 1 - it assumes your date has a bell curve. It's useful when data has varying scales. 

# Deeper dive

## Normalisation
- Used to rescale the values of features to a specific range, e.g. 0 to 1. It's make sure all the data fits into a specific range, so you're ensuring everything is on the same playing field, which allows models to work better.
- Having two features like age (18 - 70) and income (15,000 to 250,000), when normalised , they'll both fit a range of 0-1. 
- It's to be used when data have different scales that you want to bring into a common scale and with certain algorithms  like k-nearest neighbours or neural networks.
- *Application:* Meta data in a survey, or once large reams of unstructured text has been converted into a numerical format, e.g. through Bag of Words, Term Frequency-Inverse Document Frequency (TF-IDF) or Word Embeddings.
- It is crucial to ensure all numerical data are on a comparable scale, so essential to normalise the metadat and text features, then standardise both types of data.

## Standardisation
- This transforms the data to have a mean of 0 and a standard dev of 1. This is useful when data follows a normal distruction. It adjusts your data so that the average is 0 and the data spreads evens around it. 
- You would standardise data when you want to make sure all data is centred around the same point and has a similar spread. 