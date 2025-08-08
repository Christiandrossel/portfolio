import {Post} from '../models/post.model';
import {PostCategory} from '../models/post-category.enum';
import {KOTLIN_POST_DO_DONT} from './kotlin-coroutine-does-donts-blog';
import {KOTLIN_COROUTINES_WEBFLUX} from './Kotlin-coroutines-web-flux';

export const DUMMY_POSTS: Post[] = [
//   {
//     id: 1,
//     title: 'Adding test description for data-driven tests in xUnit',
//     content: "Often times, you find yourself in writing data-driven tests in xUnit (like Theory tests) and you want to add a description to each test case. Let's explore how to do that.\n" +
//       "\n" +
//       "The problem\n" +
//       "Let's imagine you have a test as such:\n" +
//       "\n" +
//       "[Theory]\n" +
//       "[MemberData(nameof(InvalidFilters))]\n" +
//       "public async Task ShouldNotAllowInvalidInvariants(LimitDesignerFilters filters)\n" +
//       "...\n" +
//       "\n" +
//       "    public record LimitDesignerFilters(\n" +
//       "        string Description,\n" +
//       "        Guid? WorkpieceNumber,\n" +
//       "        IReadOnlyCollection<int>? DressingIds,\n" +
//       "        IReadOnlyCollection<int>? DressingTools,\n" +
//       "        IReadOnlyCollection<int>? LimitIds);\n" +
//       "If we execute the test, then we get something like this in the test runner:\n" +
//       "\n" +
//       "old\n" +
//       "\n" +
//       "As we see it is really hard to understand what each test case is about, especially given that we have some collections and thanks to the recordthis will internally use the ToString() method to display the values. So - we can exactly use that to our advantage.\n" +
//       "\n" +
//       "The solution - overriding ToString()\n" +
//       "To make the test runner display a more meaningful description, we can override the ToString() method in our LimitDesignerFilters record. This way, we can format the output to be more readable and informative. So let's add a description field and override the ToString() method:\n" +
//       "\n" +
//       "public record LimitDesignerFilters(\n" +
//       "    string Description,\n" +
//       "    Guid? WorkpieceNumber,\n" +
//       "    IReadOnlyCollection<int>? DressingIds,\n" +
//       "    IReadOnlyCollection<int>? DressingTools,\n" +
//       "    IReadOnlyCollection<int>? LimitIds)\n" +
//       "{\n" +
//       "    public override string ToString() => Description;\n" +
//       "}\n" +
//       "So we can set the Description field to a meaningful value for each test case:\n" +
//       "\n" +
//       "public static TheoryData<LimitDesignerFilters> InvalidFilters =>\n" +
//       "[\n" +
//       "    new(\"Workpiece is null\", null, [1], [1], [1]),\n" +
//       "    new(\"Param1 is null\",  Guid.NewGuid(), null, [1], [1]),\n" +
//       "];\n" +
//       "new\n" +
//       "\n" +
//       "Still \"filters\" as the name of the passed in parameter is still there, but at least a better name.",
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/1/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 2,
//     title: 'Zweiter Blogpost',
//     content: 'Hier steht der Inhalt des zweiten Blogposts. Du kannst das leicht erweitern.',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/2/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 3,
//     title: 'Dritter Blogpost',
//     content: 'Dies ist der Inhalt des dritten Blogposts. Viel Spaß beim Lesen!',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/3/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 4,
//     title: 'Vierter Blogpost',
//     content: 'Hier ist der Inhalt des vierten Blogposts. Du kannst ihn nach Belieben anpassen.',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/4/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 5,
//     title: 'Fünfter Blogpost',
//     content: 'Dies ist der Inhalt des fünften Blogposts. Viel Spaß beim Lesen!',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/5/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 6,
//     title: 'Sechster Blogpost',
//     content: 'Hier ist der Inhalt des sechsten Blogposts. Du kannst ihn nach Belieben anpassen.',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/6/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//   {
//     id: 7,
//     title: 'Siebter Blogpost',
//     content: 'Dies ist der Inhalt des siebten Blogposts. Viel Spaß beim Lesen! <pre><code class="language-typescript">const x = 5;</code></pre>\n  <p>Hier ist ein Beispiel für TypeScript-Code.</p> \n  <p>Du kannst den Code kopieren, indem du auf den Button klickst.</p> \n  ',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/7/600/300'],
//     category: PostCategory.DEV,
//     isPrivate: false
//   },
//
// // Dummy posts for the LIFE category
//   {
//     id: 7,
//     title: 'Erster Lebenspost',
//     content: 'Dies ist der Inhalt des ersten Lebensposts. Hier kannst du alles mögliche schreiben.',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/7/600/300'],
//     category: PostCategory.LIFE,
//     isPrivate: false
//   },
//   {
//     id: 8,
//     title: 'Zweiter Lebenspost',
//     content: 'Hier steht der Inhalt des zweiten Lebensposts. Du kannst das leicht erweitern.',
//     createdAt: new Date(),
//     imageUrls: ['https://picsum.photos/seed/8/600/300'],
//     category: PostCategory.LIFE,
//     isPrivate: false
//   },
  KOTLIN_POST_DO_DONT,
  KOTLIN_COROUTINES_WEBFLUX
];
