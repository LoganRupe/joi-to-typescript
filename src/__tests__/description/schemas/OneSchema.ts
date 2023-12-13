import Joi from 'joi';

export const exampleSchema = Joi.object({
  thing: Joi.string().required()
})
  .meta({ className: 'Example' })
  .description('A simple description');

export const exampleLongSchema = Joi.object({
  another: Joi.string().required()
}).meta({ className: 'ExampleLong' }).description(`
This is a long description.
There are many lines!

And more here!
`);

export const noCommentSchema = Joi.object({
  more: Joi.string().required()
}).meta({ className: 'NoComment' });

export const disableDescriptionSchema = exampleSchema.meta({
  className: 'DisableDescription',
  disableDescription: true
});
export const disableDescriptionObjectSchema = Joi.object({
  withDescription: Joi.object().pattern(Joi.string(), exampleSchema).meta({ unknownType: exampleSchema }),
  withoutDescription: Joi.object()
    .pattern(Joi.string(), exampleSchema)
    .meta({ unknownType: exampleSchema.meta({ disableDescription: true }) })
}).meta({ className: 'DisableDescriptionObject' });

export const descriptionAndShortExampleSchema = Joi.object({
  more: Joi.string().required()
})
  .description(`A schema with a short example`)
  .example('One liner')
  .meta({ className: 'DescriptionAndShortExample' });

export const descriptionAndExampleSchema = Joi.object({
  more: Joi.string().required()
})
  .description(`A schema with an example`)
  .example({
    hello: 'world'
  })
  .meta({ className: 'DescriptionAndExample' });

export const exampleNewLineSchema = Joi.object({
  more: Joi.string().required()
})
  .example(
    `
I have many
lines!
`
  )
  .meta({ className: 'ExampleNewLine' });

export const descriptionAndExamplesSchema = Joi.object({
  more: Joi.string().required()
})
  .description(`A schema with two examples`)
  .example({
    hello: 'world'
  })
  .example({
    hello: 'coffee'
  })
  .meta({ className: 'DescriptionAndExamples' });
