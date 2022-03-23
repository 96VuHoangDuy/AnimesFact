# AnimesFact

>>>>>>>>>>>>>>>>>>> Welcome to my Test Project <<<<<<<<<<<<<<<<<<<<<<

To run project following command with this step: 
1. Go to the root project '.../AnimesFact'
2. yarn
3. cd ios && pod install
4. yarn ios / yarn android

>> My project uses mobx state management to manage data and build structure with MVVM:
>> Model-View-ViewModel
  1. Modal is xxx.store file.
  2. View is screen file (eg: AnimeFact.tsx , AnimeList.tsx)
  3. ViewModel is logic file (eg: AnimeList.logic, AnimeFact.useLogic ).

>> I use the component and screen according to Atomic Design.

Atoms: 
  eg: - 'components/Base/TitleText'
      - 'components/Base/ContentText'
      - 'components/Icon'
Molecules:
  eg: - 'components/SearchInputIcon'
Organisms:
  eg: - 'components/Header'
      - 'components/ItemCard'
Templates:
  eg: - 'components/Header'
      - 'components/ItemCard'
Pages:
  eg: - 'screens/AnimeFact'
      - 'screens/AnimeList'
      
 Thanks for reading and testing my code.
