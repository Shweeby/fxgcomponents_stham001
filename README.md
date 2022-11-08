
# Description 

Bibliothèque de 10 composantes React réutilisables :

- [Alert](#alert)
- [Autocomplete](#autocomplete)
- [Bouton](#bouton)
- [BoutonFlottants](#boutonflottants)
- [Checkbox](#checkbox)
- [Grid](#grid)
- [Menu](#menu)
- [Pagination](#pagination)
- [Slider](#slider)
- [Switch](#switch)
<br><br>
             
Pour démarrer le storybook :
```
npm run storybook
```
                      
# Liste des composantes 

## Alert 

Dans la composante "Alert", nous avons une fontion appelée "BasicAlerts", qui contient deux arguments :

1. severity : 
    - Type : string
    - Affiche la sévérité ou la gravité d'alerte et peut être une alerte en "warning", "success", "info" et "danger".  

2. text : 
    - Type : string
    - Affiche un message en fonction du type d'alerte. Le message à l'intérieur des alertes change en fonction d'alerte. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Autocomplete 

Dans la composante "Autocomplete", nous avons une fonction intitulée "CountrySelect" qui a pour objectif de selectionner ou non un pays dans une liste déroulante en saisissant automatiquement le nom du pays dans le champ input. Cette fonction possède quatre arguments : 

1. text : 
    - Type : string
    - Permet de saisir un titre pour la composante, par exemple. 

2. disabled : 
    - Type : boolean
    - Permet de désactiver la liste déroulante s'il est vrai. 

3. disableClearable : 
    - Type : boolean
    - Si vrai, l'entrée ne peut pas être effacée avec l'icone "x".

4. disableCloseOnSelect : 
    - Type : boolean. 
    - Si vrai , la fenêtre contextuelle ne se ferme pas lorsqu'une valeur est sélectionnée. Ainsi, la fenêtre de la liste déroulante reste bloquée et se referme pas lorsqu'un pays est sélectionné. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Bouton 

La composante "Bouton" a une fonction appelée "Bouton" possédant quatre arguments : 

1. width : 
    - Type : number
    - A pour objectif d'augmenter ou de diminuer la largeur des boutons.

2. variant : 
    - Type : string
    - Permet de choisir la variante que l'on veut. Il existe 3 variantes "contained", "outlined" et "text". 

3. text : 
    - Type : string
    - Permet de changer le contenu du bouton de façon automatique. 

4. color : 
    - Type : string
    - Permet de choisir n'importe quelle couleur. Mais comme nous utilisons le MUI, nous nous sommes contentés des couleurs prédéfinies dans MUI. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## BoutonFlottants 

La composante BoutonFlottants possède une fonction qui contient 6 arguments : 

1. text : 
    - Type : string
    - Permet de changer le titre des boutons de façon automatique.

2. color : 
    - Type : string
    - Permet de choisir n'importe quelle couleur. Mais comme nous utilisons le MUI, nous nous sommes contentés des couleurs prédéfinies dans MUI. 

3. size : 
    - Type : string
    - Permet de jouer sur la taille et la grandeur des boutons. 

4. marginRight : 
    - Type : number
    - Pour faire une marge de droite entre les boutons flottants. 

5. variant : 
    - Type : string
    - La variante utilisée peut etre soit "circular" soit "extended". 

6. disabled : 
    - Type : boolean. 
    - Permet de desactiver un ou plusieurs boutons flottants. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Checkbox 

La composante Checkbox possède une fonction qui contient 4 arguments : 

1. size : 
    - Type : string
    - Permet de jouer sur la taille et la grandeur des checkbox.

2. color : 
    - Type : string
    - Permet de choisir n'importe quelle couleur. Mais comme nous utilisons le MUI, nous nous sommes contentés des couleurs prédéfinies dans MUI. 

3. checked : 
    - Type : boolean
    - Si c'est vrai, le composant est coché. 

4. text : 
    - Type : string
    - Permet de changer le titre des boutons de façon automatique.

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Grid 

La composante Grid contient une fonction Grid avec deux arguments : 

1. spacing : 
    - Type : number
    - Permet de définir l'espace entre les composants de l'élément de type. Il ne peut être utilisé que sur un composant de conteneur de type.

2. xs : 
    - Type : number
    - Définit le nombre de colonnes utilisées par l'élément de grille. Il ne peut pas être supérieur au nombre total de colonnes du conteneur (12 par défaut).

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Menu 

La composantemée Menu possède une fonction appelée AccountMenu qui contient 3 arguments : 

1. display : Propriété CSS qui représente un argument dans notre composante pour afficher notre menu soit avec display "flex" ou display "row".

2. alignItems : Propriété CSS qui représente un argument dans notre composante pour aligner nos Items soit à gauche, à droite ou au centre. 

3. textAlign : Propriété CSS qui représente un argument dans notre composante pour aligner les textes soit à gauche, à droite ou au centre.

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Pagination 

Dans la composante Pagination, nous avons une fonction appelée BasicPagination. A l'intérieur de cette fonction, nous avons 3 arguments : 

1. variant : 
    - Type : string
    - La variante utilisée peut être soit "outlined" soit "text". 

2. color : 
    - Type : string
    - Permet de choisir n'importe quelle couleur. Mais comme nous utilisons le MUI, nous nous sommes contentés des couleurs prédéfinies dans MUI. 

3. disabled : 
    - Type : boolean
    - Permet de desactiver les numéros de la pagination. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Slider 

La composante Slider contient une fonction nommée ContinuousSlider avec 5 arguments : 

1. track : 
    - Type "string"
    - Prend comme valeur "inverted" ou "normal". Il est normal par défaut. S'il est "normal", la piste affichera une barre représentant la valeur du curseur. Et s'il est "inverted", la piste affichera une barre représentant la valeur restante du curseur. 
    
2. olor : 
    - Type : string
    - Permet de choisir n'importe quelle couleur. Mais comme nous utilisons le MUI, nous nous sommes contentés des couleurs prédéfinies dans MUI. 
    
3. disabled : 
    - Type : boolean
    - Il est false par défaut. Mais si c'est vrai, le composant est désactivé.
    
4. orientation : 
        - Type : string
        - Prend comme valeur "horizontal" ou "vertical". Par défaut, il est horizontal.   
    
5. height : Le height est une propriété CSS pour fixer la hauteur du composant. 

<p align="right" dir="auto"><a href="#description">:arrow_up:</a></p>

## Switch 

La composante Switch contient une fonction appelée BasicSwitches avec deux arguments déclarés à l'intérieur de cette fonction : 

1. defaultChecked : 
    - Type : boolean
    - Il est false par defaut. Mais on peut utiliser lorsque le composant n'est pas contrôlé. 
    
2. disabled : 
    - Type : boolean
    - Il est false par défaut. Mais si c'est vrai, le composant est désactivé.