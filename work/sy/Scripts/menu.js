�$ ( d o c u m e n t ) . r e a d y ( f u n c t i o n ( ) {  
  
 $ ( " . t o p " ) . l o a d ( " t o p . h t m l " ) ; 	  
 $ ( " . f o o t e r " ) . l o a d ( " f o o t e r . h t m l " ) ;  
  
 $ ( ' . n a v _ m e n u > u l > l i > u l ' ) . f i n d ( ' l i : h a s ( u l : n o t ( : e m p t y ) ) > a ' ) . a p p e n d ( " < s p a n   c l a s s = ' a r r o w ' > > < / s p a n > " ) ;  
 $ ( " . n a v _ m e n u > u l > l i " ) . l i v e ( ' m o u s e o v e r ' , f u n c t i o n ( ) {      
 $ ( " . n a v _ m e n u   u l   l i : n o t ( t h i s ) " ) . r e m o v e C l a s s ( " n a v _ m e n u _ u l _ l i _ h o v e r " ) ;  
 $ ( t h i s ) . a d d C l a s s ( " n a v _ m e n u _ u l _ l i _ h o v e r " ) ;  
 $ ( t h i s ) . c h i l d r e n ( ' u l ' ) . s h o w ( ) ;  
 } ) . b i n d ( ' m o u s e l e a v e ' , f u n c t i o n ( ) {  
 $ ( t h i s ) . c h i l d r e n ( ' u l ' ) . h i d e ( ) ;        
 } ) ;        
 t  
 $ ( " . n a v _ m e n u " ) . l i v e ( ' m o u s e l e a v e ' , f u n c t i o n ( ) {  
 $ ( t h i s ) . c h i l d r e n ( " u l " ) . c h i l d r e n ( " l i " ) . r e m o v e C l a s s ( " n a v _ m e n u _ u l _ l i _ h o v e r " ) ;  
 } ) ; 	  
  
 $ ( " . s u b _ m e n u " ) . l i v e ( ' m o u s e l e a v e ' , f u n c t i o n ( ) {  
 $ ( t h i s ) . p a r e n t ( " l i " ) . r e m o v e C l a s s ( " n a v _ m e n u _ u l _ l i _ h o v e r " ) ;  
 } ) ; 	  
 } ) ; 